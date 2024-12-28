import { Box, Typography, Card, Button, Avatar, Stack } from "@mui/material";

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
          maxWidth: 800,
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: 3,
          overflow: "hidden",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Result Section */}
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(180deg, #4e62c2, #7856d8)",
            color: "white",
            padding: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "lightgray" }}>
            Your Result
          </Typography>
          <Avatar
            sx={{
              backgroundColor: "blue",
              width: 120,
              height: 120,
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
                marginBottom: 1
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
                color: "lightgray",
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
          <Typography variant="body2" sx={{ marginTop: 1, color: "lightgray" }}>
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
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
            Summary
          </Typography>
          <Stack spacing={2}>
            <SummaryItem category="Reaction" score={80} color="#ff595e" />
            <SummaryItem category="Memory" score={92} color="#ffca3a" />
            <SummaryItem category="Verbal" score={61} color="#8ac926" />
            <SummaryItem category="Visual" score={72} color="#1982c4" />
          </Stack>
          <Button
            variant="contained"
            fullWidth
            sx={{
              marginTop: 2,
              backgroundColor: "#4e62c2",
              textTransform: "none",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#3a4da6" },
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

type SummaryItemProps = {
  category: string;
  score: number;
  color: string;
};

const SummaryItem: React.FC<SummaryItemProps> = ({
  category,
  score,
  color,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 0,
      }}
    >
      <Typography sx={{ fontWeight: "bold", color }}>{category}</Typography>
      <Typography>
        <strong>{score}</strong> / 100
      </Typography>
    </Card>
  );
};

export default App;
