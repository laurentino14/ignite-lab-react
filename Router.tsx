import {Route, Routes} from "react-router-dom";
import {Event} from "./src/pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<h1>HOme</h1>} />
      <Route path='/event' element={<Event />} />
      <Route path='/event/lesson/:slug' element={<Event />} />
    </Routes>
  );
}
