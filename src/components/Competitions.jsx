import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompetitions} from "../redux/service/competitionSerivce";

export default function Competitions() {

  const {competitions} = useSelector((store) => store.competitionsReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [])

  return (
      <div>
        Competitions
        {competitions}
      </div>
  )
}
