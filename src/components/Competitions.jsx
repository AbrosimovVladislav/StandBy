import React from "react";
import {useSelector} from "react-redux";

export default function Competitions() {

  const {competitions} = useSelector((store) => store.competitionsReducer)

  return (
      <div>
        Competitions
        {competitions}
      </div>
  )
}
