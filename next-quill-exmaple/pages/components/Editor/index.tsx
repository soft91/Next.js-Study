import { useRef, useMemo, Dispatch, SetStateAction, MutableRefObject } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { ReactQuillProps } from "react-quill";

interface IWrappedComponent extends ReactQuillProps {
	forwardedRef: MutableRefObject<ReactQuill>;
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
	setImgFiles,
}: {
	value: string;
	onChange: (e: string) => void;
	setImgFiles: Dispatch<SetStateAction<string[]>>;
}) => {
	const quillRef = useRef<ReactQuill>(null);

	const imageHandler = async () => {
		const input = document.createElement("input") as any;

		input.setAttribute("type", "file");
		input.setAttribute("accept", "image/*");
		input.setAttribute("multiple", "");
		input.click();

		input.addEventListener("change", async () => {
			try {
				if (input.files.length > 10) {
					throw new Error("10개 이상 이미지를 등록할 수 없습니다.");
				}

				const res = await // api 통신을 위한 코드
				const editor = quillRef.current?.getEditor();
				const range = editor?.getSelection() as any;

				res.data.data.map((item: { s3Key: string; url: string }) => {
					const imgUrl = item.url;
					setImgFiles((prev) => [...prev, item.s3Key]);

					editor?.insertEmbed(range.index, "image", imgUrl);
					editor?.setSelection(range.index + 1);
				});
			} catch (error) {
				console.log(error);
			}
		});
	};

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
				handlers: { image: imageHandler },
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
