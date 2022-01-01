import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
  flex-direction: row;
	gap: 20px 0px;
`;

const ImagePreviewerContinaer = styled.div`
	display: flex;
	
`

const ImagePreviewer = styled.img`
	width: 200px;
	height: 200px;
`;

const RemoveButton = styled.div`
  top: 0px;
  right: 0px;
  min-width: 30px;
  background: url("/close_2.png");
  height: 30px;
	background-size: 30px 30px;
`;

interface Props {
	fileURL: string;
	onRemove: () => void;
}

const ImageViewer = ({
	fileURL,
	onRemove
}: Props) => {
  return(
		<Container>
			<ImagePreviewerContinaer>
				<ImagePreviewer 
					src={fileURL}
				/>
				<RemoveButton
					onClick={onRemove}
				/>
			</ImagePreviewerContinaer>
		</Container>
  )
}

export default ImageViewer;