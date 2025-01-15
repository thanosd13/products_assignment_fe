import React, { useEffect, useState } from 'react';
import {
  deleteUserService,
  getAllUsersService,
} from '../../services/userService';
import DataTable from 'react-data-table-component';
import { BLUE_DARK, CIEL } from '../../constants/ColorsTypes';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { DropDownMenu } from '../../components/dropDownMenu/DropDownMenu';
import { useNavigate } from 'react-router-dom';
import { ConfirmationModal } from '../../modals/confirmationModal/ConfirmationModal';
import { useLoader } from '../../contexts/LoaderContext';
import { useToast } from '../../contexts/ToastContext';

export const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const { showLoader, hideLoader } = useLoader();
  const { showSuccess, showError } = useToast();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const navigate = useNavigate();

  const handleOpenConfirmationModal = id => {
    setDeleteId(id);
    setShowConfirmationModal(true);
  };

  // data table
  const customStyles = {
    headRow: {
      style: {
        background: CIEL,
      },
    },
  };

  const getActions = row => [
    {
      id: 1,
      name: 'Διαγραφή',
      onClick: () => handleOpenConfirmationModal(row._id),
    },
    row.role === 'producer' && {
      id: 2,
      name: 'Προϊόντα',
      onClick: () => navigate('/getProductsPerUser/' + row._id),
    },
  ];

  const columns = [
    {
      name: 'Όνομα χρήστη',
      selector: row => row.username,
      sortable: true,
    },
    {
      name: 'E-mail',
      sortable: true,
      selector: row => row.email,
    },
    {
      name: 'Ρόλος',
      sortable: true,
      selector: row => row.role,
    },
    {
      name: 'Ενέργειες',
      cell: row => (
        <div>
          <DropDownMenu
            icon={faBars}
            textColor={BLUE_DARK}
            iconColor={BLUE_DARK}
            actions={getActions(row)}
          />
        </div>
      ),
      allowOverflow: true,
      button: true,
      width: '163px',
    },
  ];

  const handleCloseConfirmationModal = () => setShowConfirmationModal(false);

  const deleteUser = id => {
    handleCloseConfirmationModal();
    showLoader();
    deleteUserService(id)
      .then(response => {
        showSuccess();
        hideLoader();
        setRefreshFlag(prevFlag => !prevFlag);
      })
      .catch(error => {
        showError();
        hideLoader();
        setRefreshFlag(prevFlag => !prevFlag);
      });
  };

  useEffect(() => {
    getAllUsersService()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [refreshFlag]);

  return (
    <div className='p-5 mt-5'>
      <DataTable
        columns={columns}
        data={users}
        customStyles={customStyles}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[7, 8, 9, 10]}
      />
      <ConfirmationModal
        id={deleteId}
        show={showConfirmationModal}
        handleClose={handleCloseConfirmationModal}
        title='Διαγραφή χρήστη'
        body='Είστε σίγουροι ότι θέλετε να προχωρήσετε σε διαγραφή του χρήστη;'
        onCallback={deleteUser}
      />
    </div>
  );
};
