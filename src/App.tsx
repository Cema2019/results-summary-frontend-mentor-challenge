import { Box, Typography, Card, Button, Avatar, Stack } from "@mui/material";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

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
          maxWidth: 600,
          maxHeight: "400px",
          backgroundColor: "white",
          borderRadius: 7,
          boxShadow: 3,
          overflow: "hidden",
          flexDirection: { xs: "column", md: "row" },
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
          <Typography variant="h6" sx={{ color: "lightgray", marginBottom: 4 }}>
            Your Result
          </Typography>
          <Avatar
            sx={{
              backgroundColor: "blue",
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
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, fontWeight: "bold", color: "#303b59" }}
          >
            Summary
          </Typography>
          <Stack spacing={1}>
            <SummaryItem
              icon="/src/assets/icon-reaction.svg"
              category="Reaction"
              score={80}
              color="#ff595e"
              backgroundColor="#fff6f5"
            />
            <SummaryItem
              icon="/src/assets/icon-memory.svg"
              category="Memory"
              score={92}
              color="#ffca3a"
              backgroundColor="#fffbf2"
            />
            <SummaryItem
              icon="/src/assets/icon-verbal.svg"
              category="Verbal"
              score={61}
              color="#8ac926"
              backgroundColor="#f2fbfa"
            />
            <SummaryItem
              icon="/src/assets/icon-visual.svg"
              category="Visual"
              score={72}
              color="#1982c4"
              backgroundColor="#f3f3fd"
            />
          </Stack>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mb: 3,
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

type SummaryItemProps = {
  category: string;
  score: number;
  color: string;
  backgroundColor: string;
  icon: string;
};

const SummaryItem: React.FC<SummaryItemProps> = ({
  category,
  score,
  color,
  backgroundColor,
  icon,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        backgroundColor: backgroundColor,
        borderRadius: 2,
        boxShadow: 0,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img src={icon} alt={`${category} icon`} width={24} height={24} />
        <Typography sx={{ fontWeight: "bold", color }}>{category}</Typography>
      </Box>
      <Box>
      <Typography>
        <strong style={{ color: "#303b59" }}>{score}</strong>
        <span style={{ color: "lightgray", fontWeight: "bold" }}> / 100</span>
      </Typography>
      </Box>
    </Card>
  );
};

export default App;
