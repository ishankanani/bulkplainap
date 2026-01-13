export const getInquiryList = async (req, res) => {
  try {
    const { status, name, contact, sort } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (name) filter.name = new RegExp(name, "i");
    if (contact) filter.contact = new RegExp(contact, "i");

    let sortOption = { createdAt: -1 };
    if (sort === "oldest") sortOption = { createdAt: 1 };
    if (sort === "next") sortOption = { followUpDate: 1 };

    const inquiries = await InquiryModel.find(filter).sort(sortOption);

    res.json({ success: true, inquiries });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
