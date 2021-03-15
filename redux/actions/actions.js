import { CHANGE_COLOR, CHANGE_OPACITY } from "./actionTypes";

 export const changeColor = color => ({
   type: CHANGE_COLOR,
   payload: color,
 });
 
 export const changeOpacity = opacity => ({
   type: CHANGE_OPACITY,
   payload: opacity,
 });