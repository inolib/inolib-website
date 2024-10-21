<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'rule2835_inolib' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'mariadb' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '|=+m}DUTCNh%ZK6mC~G43f#Ib`O6AbQiBr^>b_+8ZRKRd|uBRO:(]i7B>/ Tc7?j' );
define( 'SECURE_AUTH_KEY',   'jD!=*osC}IWaL%h22J o7HU-@ putc^XHcqCW39{/wrsQ=(:tno18H)=]m2N5+lM' );
define( 'LOGGED_IN_KEY',     'E4fum<Qsvk6t1)$i=HQB%amST0V`ul/`[ `[lq`5bVD9&P&D_nW73n<q#2p5E2JO' );
define( 'NONCE_KEY',         'hGA)R[$ZO5VcK?WGZ56fj%pWUjxs|BZV0k;pahN$!OG6D$zy-UEse$<d%Hc^#9F!' );
define( 'AUTH_SALT',         'y`n}FpVl6s`V8jy3so ..J7P.r=[GnTg64hg,Px1v`aAn:*$H6F|Lea}-`+ dlGv' );
define( 'SECURE_AUTH_SALT',  ':(2gv=M^^Q4-O4%L.JAKbv{]sWO(VS=N<r3`{^+tL`w,xUeDj]+Oq>{0L9?4`Ss&' );
define( 'LOGGED_IN_SALT',    '_q-`)<Cw?@zv%gCo5 rp|1cQ#p9*h;D!l-EK][nG-Tb47@B=8Q/t$eki!22%IZU-' );
define( 'NONCE_SALT',        'j^}tDA$/;i9JcH=C@}-oqmi _Z-(8h|G2y>@V*Fn>u<B0`+Yk M{;6&#UQg/-L`2' );
define( 'WP_CACHE_KEY_SALT', '/%rJBkEQsaxOiMw#O=J]DL=d? ;I2.&wyJZ3H/}*sf}FS]c5nW@:|?Q@i >GC6=;' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
