// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Make navigation links scroll smoothly
    var navLinks = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            
            if (href === '#') {
                return;
            }
            
            var target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                var offsetTop = target.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Handle form submission
    var buyForm = document.querySelector('.buy-form');
    
    if (buyForm) {
        buyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var format = document.getElementById('format').value;
            var quantity = document.getElementById('quantity').value;
            var address = document.getElementById('address').value;
            
            // Check if all fields are filled
            if (!name || !email || !format || !address) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show message
            alert('Thank you, ' + name + '! Your order for ' + quantity + ' ' + format + '(s) has been received.');
            buyForm.reset();
        });
    }
    
});
