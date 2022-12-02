// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primaryMain: string;
      primarySub: string;
      primaryHover: string;
      secondaryMain: string;
      secondarySub: string;
      secondaryHover: string;
      tertiaryMain: string;
      tertiarySub: string;
      tertiaryHover: string;
      tertiaryOverlay: string;
    };
  }
}
