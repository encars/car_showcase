"use client";

import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
};

const ShowMore: React.FC<ShowMoreProps> = ({
    pageNumber,
    isNext,
}) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", newLimit.toString());

        router.push(newPathName);
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton title="Show More" btnType="button" containerStyles="bg-primary-blue rounded-full text-white" handleClick={handleNavigation} />
            )}
        </div>
    );
};

export default ShowMore;