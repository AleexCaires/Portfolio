export const breakpoints = {
    sm: 768,
    lg: 1024,
    xl: 1440,
    // https://github.com/morajabi/styled-media-query
    small: function() {return this.sm+'px'},
    large: function() {return this.lg+'px'},
    xlarge: function() {return this.xl+'px'},
}