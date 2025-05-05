"use client";
import ProjectItem from "@/components/account/Project/ProjectItem";
import { getMyProjects } from "@/redux/actions/plan";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

const ProjectPage = () => {
  const dispatch = useAppDispatch();
  const { myPlans, loading } = useAppSelector((s) => s.plan);
  const { token } = useAppSelector((s) => s.auth);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getMyProjects());
    }, 700);
  }, []);

  return (
    <>
      <Box mb={6} className="flex">
        <Typography flex={1} variant="h5">
          Projects
        </Typography>

        <Link href="/pricing">
          <Button
            sx={{
              borderRadius: 4,
            }}
            variant="contained"
          >
            Create New Project
          </Button>
        </Link>
      </Box>

      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        myPlans?.map((cur) => <ProjectItem {...cur} key={cur.id} />)
      )}
    </>
  );
};

export default ProjectPage;
