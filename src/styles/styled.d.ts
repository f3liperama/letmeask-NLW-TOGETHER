import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
	  backgroundTextArea: string;
	  backgroundRoomCode: string;
	  backgroundQuestion: string;
	  backgroundModal: string;
	  backgroundCancel: string;
	  backgroundSubmit: string;
      textPrimary: string;
	  textSecondary: string;
	  headerSeparator: string;
	  questionHighlighted: string;
	  questionAnswered: string;
    };
  }
}
