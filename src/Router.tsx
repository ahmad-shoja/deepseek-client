import { Routes, Route, Navigate } from "react-router-dom";
import Translate from "./pages/Translate";
import Write from "./pages/Write";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/translate" replace />} />
        <Route path="/translate" Component={Translate} />
        <Route path="/write" Component={Write} />
      </Routes>
  );
}
