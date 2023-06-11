import { useRef, useMemo, LegacyRef, Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { ReactQuillProps } from "react-quill";

interface IWrappedComponent extends ReactQuillProps {
	forwardedRef: LegacyRef<ReactQuill>;
}

const QuillNoSSRWrapper = dynamic(
	async () => {
		const { default: RQ } = await import("react-quill");

		const QuillJS = ({ forwardedRef, ...props }: IWrappedComponent) => (
			<RQ ref={forwardedRef} {...props} />
		);
		return QuillJS;
	},
	{ ssr: false }
);

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const CustomQuill = styled(QuillNoSSRWrapper)`
	.ql-toolbar {
		border: 0.1rem solid #eeeeee;
		border-radius: 0.8rem 0.8rem 0 0;
	}

	.ql-container {
		height: 50rem;
		border: 0.1rem solid #eeeeee;
		border-radius: 0 0 0.8rem 0.8rem;
	}
`;

const Editor = ({
	value,
	onChange,
}: {
	value: string;
	onChange: (e: string) => void;
}) => {
	const quillRef = useRef<ReactQuill>(null);

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [1, 2, 3, 4, 5, 6, false] }],
					[{ size: [] }],
					["bold", "italic", "underline", "strike", "blockquote"],
					[{ list: "ordered" }, { list: "bullet" }, { align: [] }],
					["image"],
				],
			},
			clipboard: {
				matchVisual: false,
			},
		}),
		[]
	);

	const formats = [
		"header",
		"font",
		"size",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"align",
		"image",
	];

	return (
		<Container>
			<CustomQuill
				forwardedRef={quillRef}
				value={value}
				onChange={onChange}
				placeholder="내용을 입력하세요…"
				modules={modules}
				formats={formats}
			/>
		</Container>
	);
};

export default Editor;
