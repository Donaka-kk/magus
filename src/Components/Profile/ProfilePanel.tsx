interface ProfilePanelProps {
   activeTab: string;
   components: Record<string, React.ReactNode>;
}

function ProfilePanel({ activeTab, components }: ProfilePanelProps) {
   return <div>{components[activeTab]}</div>;
}
export default ProfilePanel;
