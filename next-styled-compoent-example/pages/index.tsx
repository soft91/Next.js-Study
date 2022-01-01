import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import ImageViewer from "../components/ImageViewer";
import { useRef, useState } from "react";

const Container = styled.div `
  display: flex;
`

export default function Home() {
  const imgRef = useRef(null);
  const [files, setFiles] = useState({
    fileList: []
  });
  
  return (
    <Container>
      <input
        ref={imgRef}
        type="file" 
        onChange={(e) => {
          const arr = [];
          const fileList = e.target.files;

          for(let i = 0; i < fileList.length; i++) {
            arr.push(URL.createObjectURL(fileList[i]))
          }
          setFiles((prev) => ({ 
            ...prev, 
            fileList: arr
          }));
        }}
        multiple
      ></input>

      {files.fileList.map(item => (
        <ImageViewer 
          fileURL={item}
          onRemove={() => {
            setFiles((prev) => ({ 
              ...prev, 
              fileList: prev.fileList.filter(
                (jtem) => jtem !== item
              ),
            }));
            imgRef.current.value = null;
          }}
        />
      ))}
    </Container>
  )
}
