import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useCallback, useEffect, useState } from "react";
import { getPopularTrailer } from "../services/MovieService";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "#000",
  border: "2px solid #333",
  boxShadow: 24,
  p: 4,
};

export default function ButtonTrailer({ id }) {
  const [open, setOpen] = useState(false);
  const [listTrailer, setListTrailer] = useState();
  const [iframeKey, setIframeKey] = useState("");
  const handleClose = () => setOpen(false);

  const handleClick = useCallback(async () => {
    setOpen(true);
    const trailers = await getPopularTrailer(id);
    setListTrailer(trailers);
  }, [id]);

  useEffect(() => {
    if (open && id) {
      handleClick();
    }
  }, [open, id, handleClick]);
  useEffect(() => {
    const key = listTrailer?.map((trailer) => {
      return trailer.key;
    });
    if (key) {
      setIframeKey(key[2]);
    }
  }, [listTrailer]);

  return (
    <>
      <div className="mt-12 flex items-center md:justify-start justify-center gap-4">
        <Link
          to={`/movie/${id}`}
          style={{ height: "54px", width: "157px" }}
          className="shadow-red-500 flex items-center justify-center  bg-red-500 shadow-md border-0 rounded-full  "
        >
          Watch now
        </Link>

        <Button
          onClick={handleClick}
          sx={{
            width: "176px",
            height: "54px",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "99px",
            transition: "all 0.2s ease-in-out", // Hiệu ứng chuyển đổi
            "&:hover": {
              backgroundColor: "#fff",
              color: "#ff0000",
            },
          }}
        >
          Watch trailer
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <iframe
              src={`https://www.youtube.com/embed/${iframeKey}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="100%"
              style={{ borderRadius: "8px" }}
            ></iframe>
          </Box>
        </Modal>
      </div>
    </>
  );
}
