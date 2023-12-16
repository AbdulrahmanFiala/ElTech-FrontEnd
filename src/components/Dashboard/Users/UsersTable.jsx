import React, { useEffect, useState } from "react";

import {
	getAllUsers,
	deleteUser,
} from "../../../api/services/user/user-services";

import UserRow from "./UserRow";
import ShopPagination from "../../Shop/ShopPagination/ShopPagination";

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
	IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const UsersTable = ({ userSelectionHandler }) => {
	const [users, setUsers] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const [totalCount, setTotalCount] = useState(0); // Store the total count of posts
	const [currentPage, setCurrentPage] = useState(0);

	const fetchUsers = async (page = 1) => {
		try {
			const usersData = await getAllUsers({ page }); // Add 1 to pageNumber for API's page numbering
			console.log(usersData);
			setUsers(usersData);
			// setTotalCount(usersData.length);
			// setPageSize(usersData.length); // Set the total count of posts from the API response
		} catch (error) {
			console.error("Error fetching all users:", error.message);
		}
	};

	const handlePageClick = (data) => {
		let selected = data.selected;
		setCurrentPage(selected);
		fetchUsers(selected + 1);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleDeleteUsers = async (userId) => {
		try {
			await deleteUser(userId);
			// Refresh posts after successful deletion
			const updatedUsersData = await getAllUsers();
			setUsers(updatedUsersData);
		} catch (error) {
			console.error("Error deleting post:", error.message);
		}
	};

	return (
		<div>
			{/* <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>  
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.first_name} {user.last_name}</TableCell>
                  <TableCell>{user.country}</TableCell>
                  <TableCell>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteUsers(user.id)} 
                      >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        component="div"
        count={totalCount} // Use totalCount for the count property
        rowsPerPage={pageSize}
        page={pageNumber-1}
        onPageChange={(e, newPage) => setPageNumber(newPage)}
        onRowsPerPageChange={(e) => {
          setPageSize(parseInt(e.target.value, 10));
          setPageNumber(1); // Reset pageNumber to 0 when rowsPerPage changes
        }}
      /> */}
			<table className="cart-table">
				<thead>
					<tr>
						<th className="text-center">ID</th>
						<th className="product-name-thumbnail text-center">
							Email
						</th>
						<th className="product-price text-center">Name</th>
						<th className="product-quantity text-center">
							Mobile Phone
						</th>
						{/* <th className="product-total text-center">Total</th> */}
						{/* <th className="product-remove text-center">Edit</th>
						<th className="text-center">Delete</th> */}
						{/* <th className="text-center">Actions</th> */}
					</tr>
				</thead>
				<tbody>
					{users.results &&
						users.results.map((user) => {
							return (
								<UserRow
									key={user.id}
									user={user}
									userSelectionHandler={userSelectionHandler}
								/>
							);
						})}
				</tbody>
			</table>
			{users.results && users.results.length !== 0 && (
				<ShopPagination
					pageCount={Math.ceil(users.count / 12)}
					onPageChange={handlePageClick}
				/>
			)}
		</div>
	);
};

export default UsersTable;
