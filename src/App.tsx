import { Box, Typography, Button, Avatar, } from "@mui/material";
import SummaryItems from "../components/summaryItems";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2fa",
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 500,
          backgroundColor: "white",
          borderRadius: 7,
          boxShadow: 3,
          overflow: "hidden",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Result Section */}
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(360deg, #312cea, #6743ff)",
            color: "white",
            padding: 3,
            textAlign: "center",
            borderRadius: 7,
          }}
        >
          <Typography variant="h6" sx={{ color: "#a0a2af", marginBottom: 4 }}>
            Your Result
          </Typography>
          <Avatar
            sx={{
              background: "linear-gradient(180deg, #312cea 70%, #4633ed 100%)",
              width: 150,
              height: 150,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                lineHeight: 1,
                color: "white",
                marginBottom: 1,
              }}
            >
              76
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                lineHeight: 1,
                color: "#a0a2af",
              }}
            >
              of 100
            </Typography>
          </Avatar>

          <Typography
            variant="h5"
            sx={{ marginTop: 2, fontWeight: "bold", fontSize: "1.8rem" }}
          >
            Great
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1, color: "#a0a2af" }}>
            You scored higher than 65% of the people who have taken these tests.
          </Typography>
        </Box>

        {/* Summary Section */}
        <Box
          sx={{
            flex: 1,
            padding: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, fontWeight: "bold", color: "#303b59" }}
          >
            Summary
          </Typography>
          <SummaryItems />
          <Button
            variant="contained"
            fullWidth
            sx={{
              my: 3,
              backgroundColor: "#303b59",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: 4,
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
