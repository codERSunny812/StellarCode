import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaAngleDown } from "react-icons/fa6";
import { LangContext } from '../../../../Context/LangContext';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const LangDropDown = () => {
    // const [lang,setLang] = useState("");
    const {lang,setLang} = useContext(LangContext);
    console.log("LangDropDown - lang:", lang);
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#282828] px-3 py-[6px] text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                    {!lang ? <p>Choose a lang</p> : lang}
                    <FaAngleDown className="-mr-1 h-4 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-1 right-0 w-fit z-10 mt-2 origin-top-right rounded-md bg-[#282828] text-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 capitalize">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    onClick={() => setLang("javascript")}
                                >
                                   javascript
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    onClick={() => setLang("java")}
                                >
                                    java
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    onClick={() => setLang("python")}
                                >
                                    python
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        onClick={() => setLang("cpp")}
                                    >
                                        cpp
                                    </a>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default LangDropDown;
