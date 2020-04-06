import React from "react";
import { useLoginPageStyles } from "../styles";
import SEO from "../components/shared/Seo";
import { Card, CardHeader, TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FacebookIconBlue from '../images/facebook-icon-blue.svg';
import FacebookIconWhite from '../images/facebook-icon-white.png';

function LoginPage() {
  const classes=useLoginPageStyles();

  return (
    <>
      <SEO title="Login"/>
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader}/>
            <form>
              <TextField
                autoComplete="username"
                className={classes.textField}
                fullWidth
                label="Username"
                margin="dense"
                variant="filled"
              />
              <TextField
                autoComplete="current-password"
                className={classes.textField}
                fullWidth
                label="Password"
                margin="dense"
                type="password"
                variant="filled"
              />
              <Button
                className={classes.button}
                color="primary"
                fullWidth
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
            </form>
            <div className={classes.orContainer}>
              <div className={classes.orLine}/>
              <div>
                <Typography color="textSecondary" variant="body2">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine}/>
            </div>
            <LoginWithFacebook color="secondary" iconColor="blue"/>
            <Button color="secondary" fullWidth>
              <Typography variant="caption">
                Forgot password?
              </Typography>
            </Button>
          </Card>
          <Card className={classes.signUpCard}>
            <Typography align="right" variant="body2">
              Don't have an account?
            </Typography>
            <Link to="/accounts/emailsignup">
              <Button color="primary" className={classes.signUpButton}>
                Sign up
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export function LoginWithFacebook({color, iconColor, variant}){
  const classes = useLoginPageStyles();
  const facebookIcon = iconColor === 'blue' ? FacebookIconBlue : FacebookIconWhite;
  return (
    <Button fullWidth color={color} variant={variant}>
      <img src={facebookIcon} alt="facebook icon" className={classes.facebookIcon}/>
      Log In with Facebook
    </Button>
  );
}

export default LoginPage;
