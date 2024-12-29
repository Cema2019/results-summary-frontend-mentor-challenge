import { Stack, Card, Box, Typography } from "@mui/material";
import summaryData from "../data/data.json";

type SummaryItemType = {
  category: string;
  score: number;
  color: string;
  backgroundColor: string;
  icon: string;
};

const SummaryItems: React.FC = () => {
  return (
    <Stack spacing={1}>
      {summaryData.map((item: SummaryItemType, index: number) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 2,
            backgroundColor: item.backgroundColor,
            borderRadius: 2,
            boxShadow: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={item.icon}
              alt={`${item.category} icon`}
              width={15}
              height={15}
            />
            <Typography variant="caption" sx={{ fontWeight: "bold", color: item.color }}>
              {item.category}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">
              <strong style={{ color: "#303b59" }}>{item.score}</strong>
              <span style={{ color: "#a0a2af", fontWeight: "bold" }}> / 100</span>
            </Typography>
          </Box>
        </Card>
      ))}
    </Stack>
  );
};

export default SummaryItems;
