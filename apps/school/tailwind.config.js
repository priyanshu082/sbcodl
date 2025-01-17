/** @type {import('tailwindcss').Config} */
import { join } from "path"
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"

export default {
    darkMode: ["class"],
	content: [
		join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
		join(__dirname, "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"),
	  ],
	  
	
  theme: {
  	extend: {
		backgroundImage: {
			'logo': "url('apps/school/src/assets/images/logo.png')",
		  },
		animation: {
			move: "move 5s linear infinite",
			scroll:
			"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		  },
		  keyframes: {
			move: {
			  "0%": { transform: "translateX(-200px)" },
			  "100%": { transform: "translateX(200px)" },
			},
			scroll: {
				to: {
				  transform: "translate(calc(-50% - 0.5rem))",
				},
			  },
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors]
}

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }