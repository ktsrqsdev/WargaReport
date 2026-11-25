import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { ErrorText } from "../components/Field";
import { Icon } from "../components/Icons";
import ReportStepLayout, { StepButtons } from "../components/ReportStepLayout";
import { inputBareClass, inputClass, inputWrapClass, labelClass } from "../components/ui";
import { COMMON_STREETS } from "../constants/categories";
import { setDraft } from "../redux/slices/reportsSlice";

export default function ReportLocationPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const draft = useSelector(state => state.reports.draft);

    const [district, setDistrict] = useState(draft.district ?? "Coblong");
    const [address, setAddress] = useState(draft.address ?? "");
    const [error, setError] = useState("");

    if (!draft.category) return <Navigate to="/report/topic" replace />;

    function handleContinue() {
        if (address.trim().length < 5) return setError("Please enter a street address or landmark (min 5 characters).");
        dispatch(setDraft({ district, address: address.trim() }));
        navigate("/report/proof");
    }

    return (
        <ReportStepLayout step={2} title="Where is it located?" subtitle="Provide street address, RT/RW, or notable landmark for inspection crews.">
            <StepButtons backTo="/report/topic" onContinue={handleContinue}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="area" className={labelClass}>
                            Kelurahan / Kecamatan &amp; Wilayah
                        </label>
                        <select id="area" value={district} onChange={e => setDistrict(e.target.value)} className={inputClass}>
                            {Object.keys(COMMON_STREETS).map(name => (
                                <option key={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <p className={labelClass}>Common areas in {district} · Kota Bandung</p>
                        <div className="flex flex-wrap gap-2">
                            {COMMON_STREETS[district].map(street => (
                                <button
                                    key={street}
                                    type="button"
                                    onClick={() => {
                                        setAddress(street);
                                        setError("");
                                    }}
                                    className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                    {street}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="address" className={labelClass}>
                            Street Address, RT/RW, or Landmark *
                        </label>
                        <div className={inputWrapClass}>
                            <input
                                id="address"
                                type="text"
                                value={address}
                                onChange={e => {
                                    setAddress(e.target.value);
                                    setError("");
                                }}
                                className={inputBareClass}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-30 rounded-xl bg-(--bg-primary) px-4 py-3 text-xs [border:var(--bd-secondary)]">
                        <Icon.Coordinates />
                        Coordinates auto-pinned
                        <span className="ml-auto font-(family-name:--font-pm) text-[11px] text-(--disabled)">6.2088° S, 106.8456° E (WIB)</span>
                    </div>
                </div>
                <ErrorText text={error} className="mt-4" />
            </StepButtons>
        </ReportStepLayout>
    );
}
