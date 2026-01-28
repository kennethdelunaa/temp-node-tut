const authorize = (req, res, next) => {
    const {user} = req.query
    if(user === 'kinet'){
        req.user = {name: 'kinet', id: 16}
        console.log('authorized');
        next() 
    }
   else{
    console.log('unauthorized');
    res.status(401).send('Unauthorized')
   }
    
}

module.exports = authorize;