import Swal from 'sweetalert2';

export const ForgotSuccessAlert = (email:string, onAlertClose: () => void) => {

    return (
        <>
            {
                Swal.fire({
                    icon: 'success',
                    title: 'Mail sended!',
                    html: `We have sent an email to <b>${email}</b> with a link to recover your password.`,
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
