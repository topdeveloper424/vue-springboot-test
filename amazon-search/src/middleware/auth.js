export default function auth({ next, router }) {
    console.log("username",localStorage.getItem('username'))
    if (!localStorage.getItem('username')) {
      return router.push({ name: 'Login' });
    }
  
    return next();
  }