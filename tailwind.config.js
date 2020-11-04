module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  

  },
  purge: [],
  theme: {
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
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
