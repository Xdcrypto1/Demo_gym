function Header() {
  return (
<section style={{ textAlign: "center", padding: "4rem 1rem" }}>
<div className="h-screen" >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Train Hard. Get Stronger. Feel Better.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          EliteFit Gym helps you build strength, confidence, and discipline with
          modern equipment and certified trainers.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/contact">
            <button>Join Now</button>
          </Link>
        </motion.div>
         </div>
      </section>
     
    );
}

export default Header;
