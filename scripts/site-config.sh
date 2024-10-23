        # Initial delay to ensure MySQL is ready
        echo 'Waiting for MySQL and WordPress to be ready...';
        sleep 20;

        # Check and install WordPress if not installed
        if ! wp core is-installed --path=/var/www/html --allow-root; then
          echo 'WordPress not installed. Running installation...';
          wp core install \
            --url='http://localhost:8080' \
            --title='My Awesome Store' \
            --admin_user='admin' \
            --admin_password='admin_password' \
            --admin_email='admin@example.com' \
            --skip-email \
            --path=/var/www/html \
            --allow-root;
        fi

        # Site Configuration
        echo 'Configuring WordPress settings...';
        wp option update blogname 'My Awesome Store' --path=/var/www/html --allow-root;
        wp option update blogdescription 'The best place to shop' --path=/var/www/html --allow-root;
        wp option update timezone_string 'America/New_York' --path=/var/www/html --allow-root;
        wp option update permalink_structure '/%postname%/' --path=/var/www/html --allow-root;
        
        # Check if the WooCommerce installation variable is set to true
        if [ "$WPCLI_ONLINE_STORE" = "true" ]; then
            echo "Installing WooCommerce..."
            wp plugin install woocommerce --activate --path="/var/www/html"
        else
            echo "WooCommerce installation skipped."
        fi

        # Admin User
        # echo 'Creating WordPress admin user...';
        # wp user create admin admin@example.com --role=administrator --user_pass=admin_password --path=/var/www/html --allow-root;
        # wp user update admin --display_name='Admin User' --path=/var/www/html --allow-root;