const path = require('path');
const Product = require('./models/Product');
const express = require('express');
const app = express();
const User = require('./models/users');
const router = express.Router(); 
module.exports = router;
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./util/database');
const errorsController = require('./controllers/errors.js');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const session = require('express-session');

app.use(session({
    secret: 'votre_secret',
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


// Route pour la page de connexion
app.get('/admin/connexion', (req, res) => {
    res.render('admin/connexion', {
        path: '/admin/connexion',
    });
});

// Route pour l'ajout d'un produit
app.post('/admin/add-product', async (req, res) => {
    const { title, image_url, price, description } = req.body;
    try {
      const product = new Product(null, title, image_url, description, price);
      await product.save();
      res.redirect('/confirmation');
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).send('Error adding product');
    }
  });
  
  // Route pour la mise à jour d'un produit existant
  app.post('/admin/edit-product', async (req, res) => {
    const { id, title, image_url, price, description } = req.body;
    try {
      const product = new Product(id, title, image_url, description, price);
      await product.update();
      res.redirect('/confirmation');
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).send('Error updating product');
    }
  });

// Route pour la connexion
router.post('/login', async (req, res) => {
    try {
        // Récupérez les informations d'identification depuis le formulaire
        const { email, password } = req.body;

        // Recherchez l'utilisateur dans la base de données par son email
        const user = await User.findByEmail(email);

        // Vérifiez si l'utilisateur existe
        if (!user) {
            // Si l'utilisateur n'existe pas, renvoyez un message d'erreur
            return res.status(401).send('Email ou mot de passe incorrect');
        }

        // Vérifiez si le mot de passe correspond à celui enregistré dans la base de données
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            // Si le mot de passe ne correspond pas, renvoyez un message d'erreur
            return res.status(401).send('Email ou mot de passe incorrect');
        }

        // Si les informations d'identification sont correctes, connectez l'utilisateur (par exemple, en créant une session)
        req.session.userId = user.id; // Enregistrez l'ID de l'utilisateur dans la session

        // Redirigez l'utilisateur vers la page d'accueil ou une autre page appropriée
        res.redirect('/');
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Une erreur est survenue lors de la connexion');
    }
});


// Route pour la création de compte
app.post('/register', async (req, res) => {
    try {
        // Récupérez les données du formulaire d'inscription
        const { id, nom, prenom, email, tel, password } = req.body;

        // Vérifiez si l'utilisateur existe déjà dans la base de données
        const existingUser = await User.findByEmail(email); // Utilisez User au lieu de user

        if (existingUser) {
            // Si l'utilisateur existe déjà, renvoyez un message d'erreur
            return res.status(400).send('Un utilisateur avec cet email existe déjà');
        }

        // Hash du mot de passe
        const hashedpassword = await bcrypt.hash(password, 10); // Utilisez hashedMdp au lieu de hashedmdp

        // Enregistrez le nouvel utilisateur dans la base de données
        const newUser = await User.create({
            id,
            nom,
            prenom,
            email,
            tel,
            password: hashedpassword // Utilisez hashedMdp au lieu de hashedmdp
        });

        // Connectez l'utilisateur après la création de compte (par exemple, en créant une session)
        req.session.userId = newUser.id; // Enregistrez l'ID du nouvel utilisateur dans la session

        // Redirigez l'utilisateur vers la page d'accueil ou une autre page appropriée
        res.redirect('/');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Une erreur est survenue lors de la création de compte');
    }
});



app.use(errorsController.get404);


app.listen(3001);