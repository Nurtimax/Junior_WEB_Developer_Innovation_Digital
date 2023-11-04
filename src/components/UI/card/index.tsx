import { Box, Typography, styled } from "@mui/material";
import { FC } from "react";
import { ICardGraphList } from "../../../types/cardGraph";

interface IGithubGraphCard {
  startTitle?: string;
  endTitle?: string;
  list: ICardGraphList[];
}

const StyledCard = styled(Box)`
  width: 10px;
  height: 10px;
  border-radius: 2px;
`;

const GithubGraphCard: FC<IGithubGraphCard> = ({
  endTitle,
  startTitle,
  list,
}) => {
  return (
    <Box pt={1} display="flex" alignItems="center" gap={0.2}>
      <Typography sx={{ fontSize: "12px" }}>{startTitle || "Less"}</Typography>
      {list.map((item) => (
        <StyledCard key={item.id} sx={{ background: item.color }} />
      ))}

      <Typography sx={{ fontSize: "12px" }}>{endTitle || "More"}</Typography>
    </Box>
  );
};

export default GithubGraphCard;
