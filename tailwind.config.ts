import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		scrollMargin: {
  			'scroll-1300': '90px',
  			'scroll-765': '62px'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'nav-default': '#808080',
  			'nav-hover': '#000000',
  			'nav-active': '#991b1b',
  			'whatsapp-default': '#25d366',
  			'whatsapp-hover': '#1eab5e',
  			footerBg: '#212529',
  			primaryText: '#991b1b',
  			'primaryText-hover': '#700e0e',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'nav-shadow': '0 2px 8px rgba(0, 0, 0, 0.1)',
  			'services-card': '0 4px 10px rgba(0, 0, 0, 0.15)'
  		},
  		maxWidth: {
  			'big-screen': '1200px',
  			'small-screen': '570px'
  		},
  		screens: {
  			'min-mq-766': {
  				min: '766px'
  			},
  			'mq-1300': {
  				max: '1300px'
  			},
  			'min-mq-1301': {
  				min: '1301px'
  			},
  			'mq-950': {
  				max: '950px'
  			},
  			'mq-875': {
  				max: '875px'
  			},
  			'mq-765': {
  				max: '765px'
  			},
  			'mq-565': {
  				max: '565px'
  			},
  			'mq-500': {
  				max: '500px'
  			},
  			'mq-400': {
  				max: '400px'
  			}
  		},
  		animation: {
  			'loop-scroll': 'loop-scroll 15s linear infinite'
  		},
  		keyframes: {
  			'loop-scroll': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
