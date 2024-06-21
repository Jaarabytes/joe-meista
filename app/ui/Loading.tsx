// This is a loading Component. Hopefully to be integrated with Suspense library


interface LoadingModalProps {
    isOpen : boolean,
}

const LoadingModal = ({ isOpen }: LoadingModalProps) => {
    return isOpen ? (
      <div className="modal fixed z-50 inset-0 overflow-y-auto bg-opacity-50 backdrop-blur-sm">
        <div className="modal-content flex items-center justify-center min-h-screen">
            <p className="text-3xl text-black">Loading...</p>
        </div>
      </div>
    ) : null;
  };
export default LoadingModal;