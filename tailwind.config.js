module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  

  },
  purge: [],
  theme: {
    spacing: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
     }
    extend: {
      colors:{
        primary:' #017698';
      
        secondary:{
          100:'#E2E2D5',
          200:'#888883',
        }
       }
    },
  },
  variants: {
    extend:{},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
