'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';

interface FullScreenImageProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string | null;
}

const FullScreenImage = ({ isOpen, onClose, imageSrc }: FullScreenImageProps) => {
    if (!imageSrc) return null;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[60]" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-cyber-dark/90 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0">
                    <div className="flex items-center justify-center min-h-screen p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-[95vw] h-[80vh] sm:h-auto flex items-center justify-center">
                                <button
                                    onClick={onClose}
                                    className="absolute right-2 top-2 text-white/50 hover:text-white transition-colors z-10 bg-cyber-dark/50 rounded-full p-2"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="w-full h-full overflow-auto flex items-center justify-center">
                                    <img
                                        src={imageSrc}
                                        alt="Fullscreen view"
                                        className="max-w-full max-h-[75vh] sm:max-h-[85vh] w-auto h-auto object-contain"
                                        style={{
                                            touchAction: 'pan-x pan-y',
                                        }}
                                    />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default FullScreenImage;