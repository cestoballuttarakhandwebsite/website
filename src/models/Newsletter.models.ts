import mongoose, {Schema, Document} from 'mongoose'

export interface NewsletterEmail extends Document{
    email: string;
    active: boolean;
}

const newsletterSchema: Schema<NewsletterEmail> = new Schema({
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

const NewsletterModel = (mongoose.models.User as mongoose.Model<NewsletterEmail>) || (mongoose.model<NewsletterEmail>("NewsletterEmail", newsletterSchema, "newsletteremails"))

export default NewsletterModel