

const Header = ({ text, bg, count }) => {
    return (
        <div>
            <div
                className={`${bg} transition-all flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white mb-5`}
            >
                {text}
                <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
                    {count}
                </div>
            </div>

        </div>
    );
};

export default Header;