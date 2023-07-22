import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const DeleteAlert = ({ action }) => (
	<AlertDialog.Portal>
		<AlertDialog.Overlay className="fixed inset-0 backdrop-blur-sm bg-gray-800 bg-opacity-50 sm:w-full" />
		<AlertDialog.Content className="contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-[25px]">
			<AlertDialog.Title className="text-slate-900 m-0 text-[17px] font-medium">
				Are you absolutely sure?
			</AlertDialog.Title>
			<AlertDialog.Description className="text-slate-900 mt-4 mb-5 text-[15px] leading-normal">
				This action cannot be undone. This will permanently delete your account and
				remove your data from our servers.
			</AlertDialog.Description>
			<div className="flex justify-end gap-[25px]">
				<AlertDialog.Cancel asChild>
					<button className="text-slate-900 bg-gray-50 hover:bg-gray-200 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
						Cancel
					</button>
				</AlertDialog.Cancel>
				<AlertDialog.Action asChild>
					<button
						onClick={action}
						className="text-white focus:shadow-red-400 bg-red-500 hover:bg-red-400 inline-flex h-[37px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
						Yes, delete account
					</button>
				</AlertDialog.Action>
			</div>
		</AlertDialog.Content>
	</AlertDialog.Portal>
);

export default DeleteAlert;
