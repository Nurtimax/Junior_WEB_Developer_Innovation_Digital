import { Box, Container, styled } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import { useEffect } from "react";
import { getDataThunk } from "../../store/slices/data";
import Table from "../../components/table";

const RootStyle = styled(Box)(() => ({}));

const GithubChart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataThunk());
  }, [dispatch]);

  return (
    <RootStyle>
      <Container>
        <Table />
      </Container>
    </RootStyle>
  );
};

export default GithubChart;
