// JavaScript to handle future interactions

// Placeholder for login function
function login() {
    alert('Login functionality coming soon!');
}

// Placeholder for sign-up function
function signup() {
    alert('Sign-up functionality coming soon!');
}

// add functionality to  hamburger 
// Select the hamburger icon and navigation links
document.getElementById('hamburger').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  const icon = this.querySelector('i');

  navLinks.classList.toggle('active');
  
  if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times'); // Change to cross icon
  } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars'); // Revert to hamburger icon
  }
});

/* new */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;

passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // 注册或登录逻辑
}));

passport.use(new GitHubStrategy({
    clientID: 'YOUR_GITHUB_CLIENT_ID',
    clientSecret: 'YOUR_GITHUB_CLIENT_SECRET',
    callbackURL: '/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
    // 注册或登录逻辑
}));

// Google OAuth route
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    // 成功处理
    res.redirect('/');
});

// GitHub OAuth route
app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    // 成功处理
    res.redirect('/');
});
