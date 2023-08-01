import Swal from 'sweetalert2';

export const FailAlert = (message:string, onAlertClose: () => void) => {
  
    return (
        <>
            {
                Swal.fire({
                    icon: 'error',
                    title: 'An error has occurred',
                    text: message,
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
