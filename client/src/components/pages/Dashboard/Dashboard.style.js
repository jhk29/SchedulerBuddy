import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    root: {
      marginTop: "5rem",
      marginLeft: "0.3rem",
      paddingRight: "2rem",
    },
    card: {
      height: 600,
    },
    smallCard: {
      height: 381.5,
      overflowY: "scroll",
      "& .MuiListSubheader-sticky": {
        position: "inherit",
      },
    },
    smallerCard: {
      height: 200,
    },
    wordsToInspireHeader: {
      fontSize: 14,
      marginBottom: 12,
    },
    inspireQuote: {
      textAlign: "center",
      fontStyle: "oblique",
      marginTop: 25,
    },
    quoteAuthor: {
      float: "right",
    },
  },
  { index: 1 }
);

export default useStyles;
