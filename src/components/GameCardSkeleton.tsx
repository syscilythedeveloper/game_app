import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
<<<<<<< HEAD
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
=======

const GameCardSkeleton = () => {
  return (
    <Card>
>>>>>>> refs/remotes/origin/main
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
