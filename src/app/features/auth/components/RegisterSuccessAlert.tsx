import Swal from 'sweetalert2';

export const RegisterSuccessAlert = (email: string, onAlertClose: () => void) => {
    
    return (
        <>
            {
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations!',
                    html: `We have sent a confirmation email to <b>${email}</b>, please confirm it to activate your account.`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }).then(onAlertClose)
            }
        </>
    )
    
}
