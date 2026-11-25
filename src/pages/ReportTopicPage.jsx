import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CategoryIcon from "../components/CategoryIcon";
import { ErrorText } from "../components/Field";
import ReportStepLayout, { StepButtons } from "../components/ReportStepLayout";
import { fetchAdminData } from "../redux/slices/adminSlice";
import { setDraft } from "../redux/slices/reportsSlice";

export default function ReportTopicPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const draft = useSelector(state => state.reports.draft);
    const categories = useSelector(state => state.admin.categories);

    const [selected, setSelected] = useState(draft.category ?? "");
    const [error, setError] = useState("");

    useEffect(() => {
        dispatch(fetchAdminData());
    }, [dispatch]);

    function handleContinue() {
        const category = categories.find(item => item.name === selected);
        if (!category) return setError("Please choose a category first.");

        dispatch(setDraft({
            category: category.name,
            agency: category.agency,
            sla: category.sla,
        }));
        navigate("/report/location");
    }

    return (
        <ReportStepLayout
            step={1}
            title="What needs fixing?"
            subtitle="Select the municipal service category that best matches the issue observed.">
            <StepButtons onContinue={handleContinue}>
                <div className="grid gap-3 sm:grid-cols-2">
                    {categories.map(item => (
                        <div
                            key={item.name}
                            onClick={() => { setSelected(item.name); setError(""); }}
                            className={`flex cursor-pointer flex-col gap-1.5 rounded-[14px] border px-4 py-3.5 ${
                                selected === item.name
                                    ? "border-(--green) bg-(--light-green)"
                                    : "border-(--bd-secondary) bg-(--bg-secondary)"
                            }`}>
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <CategoryIcon name={item.name} />
                                {item.name}
                                <span className="ml-auto rounded-full bg-(--light-green) px-2 py-0.5 font-(family-name:--font-pm) text-[10px] font-normal text-(--success)">
                                    {item.sla}h SLA
                                </span>
                            </div>
                            <p className="text-[13px] font-medium">{item.citizenLabel}</p>
                            <p className="text-xs leading-relaxed text-(--disabled)">{item.citizenHint}</p>
                        </div>
                    ))}
                </div>
                <ErrorText text={error} className="mt-4" />
            </StepButtons>
        </ReportStepLayout>
    );
}
