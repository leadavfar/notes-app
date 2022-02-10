const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signUp = (req, res) => {
    const errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({ text: 'Password do not match' })
    }
    if (password.length < 4) {
        errors.push({ text: 'Passwords must be least 4 characters' })
    }
    if (errors.length > 0) {
        res.render('users/signup', { errors })
    } else {
        res.send('signup successfully')
    }
};

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signIn = (req, res) => {
    res.send('signin');
};

usersCtrl.logOut = (req, res) => {
    res.send('logout');
};

module.exports = usersCtrl;